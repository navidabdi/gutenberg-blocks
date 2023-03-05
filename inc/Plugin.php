<?php

namespace Naviddev\GutenbergBlocks;

class Plugin {
	/**
	 * Prefix for naming.
	 *
	 * @var string
	 */
	const PREFIX = 'naviddev-gutenberg-blocks';

	/**
	 * Gettext localization domain.
	 *
	 * @var string
	 */
	const L10N = self::PREFIX;

	/**
	 * @var string
	 */
	private static string $baseUrl;

	public static function perInit(): void {
		// block initialization
		// add_action('after_setup_theme', __CLASS__ . '::gutenbergCss');
		add_action('init',  __CLASS__ . '::gutenbergBlocksInit');
	}

	public static function init(): void {
		add_action('enqueue_block_editor_assets', __CLASS__ . '::registerBlockAssets');
		// blocks category
		if (version_compare($GLOBALS['wp_version'], '5.7', '<')) {
			add_filter('block_categories', __CLASS__ . '::gutenbergBlocksRegisterCategory', 10, 2);
		} else {
			add_filter('block_categories_all', __CLASS__ . '::gutenbergBlocksRegisterCategory', 10, 2);
		}

		add_action('wp_enqueue_scripts', __CLASS__ . '::enqueueScripts');
		add_action('enqueue_block_editor_assets', __CLASS__ . '::enqueueScripts');


		self::registerBlockStyles();
	}

	public static function getBlocksName(): array {
		return [
			'bootstrap',
			'image-box'
		];
	}

	public static function gutenbergBlocksInit(): void {
		foreach (self::getBlocksName() as $block_name) {
			register_block_type(self::getBasePath() . '/build/blocks/' . $block_name);
		}
	}

	public static function gutenbergBlocksRegisterCategory($categories, $post): array {
		return [
			[
				'slug'  => 'naviddev-gutenberg-blocks',
				'title' => __('NavidDev Gutenberg Blocks', Plugin::L10N),
			],
			...$categories,
		];
	}

	public static function registerBlockStyles() {
		$block_styles = [
			'core/image' => [
				'shadow'         => __('Shadow', 'textdomain'),
			],
			'core/button' => [
				'fill-red'         => __('Fill Red', 'textdomain'),
				'outline-blue'      => __('Outline Blue', 'textdomain'),
			],
			'core/quote' => [
				'shadow'         => __('Shadow', 'textdomain'),
				'outline'      => __('Outline', 'textdomain'),
			],
		];

		foreach ($block_styles as $block => $styles) {
			foreach ($styles as $style_name => $style_label) {
				register_block_style(
					$block,
					[
						'name'         => $style_name,
						'label'        => $style_label,
					]
				);
			}
		}
	}

	public static function registerBlockAssets() {
		wp_enqueue_script(
			'gutenberg-blocks-js',
			GUTENBERG_BLOCKS_INC_URL . 'js/plugin.js',
			['wp-blocks', 'wp-dom-ready', 'wp-edit-post'],
			GUTENBERG_BLOCKS_VERSION,
			TRUE
		);
	}

	public static function enqueueScripts() {
		wp_enqueue_style(
			'gutenberg-blocks-style',
			GUTENBERG_BLOCKS_INC_URL . 'css/style.css',
			[],
			GUTENBERG_BLOCKS_VERSION,
			FALSE
		);
	}


	public static function gutenbergCss() {
		add_editor_style(GUTENBERG_BLOCKS_INC_URL . 'css/style.css');
	}

	/**
	 * Loads the plugin text domain.
	 */
	public static function loadTextDomain(): void {
		load_plugin_textdomain(static::L10N, FALSE, static::L10N . '/languages/');
	}

	/**
	 * The base URL path to this plugin's folder.
	 *
	 * Uses plugins_url() instead of plugin_dir_url() to avoid a trailing slash.
	 */
	public static function getBaseUrl(): string {
		if (!isset(static::$baseUrl)) {
			static::$baseUrl = plugins_url('', static::getBasePath() . '/plugin.php');
		}
		return static::$baseUrl;
	}

	/**
	 * The absolute filesystem base path of this plugin.
	 *
	 * @return string
	 */
	public static function getBasePath(): string {
		return dirname(__DIR__);
	}
}
