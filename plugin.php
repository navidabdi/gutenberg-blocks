<?php
/**
 * Plugin Name:       Gutenberg Blocks
 * Description:       An addon for Gutenberg plugin.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Nabi Abdi
 * Author URI:        https://webkima.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenberg-blocks
 */

// Stop Direct Access 
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Blocks Final Class
 */

final class GutenbergBlocks {

	public function __construct() {

		// define constants
		$this->gutenbergBlocksConstants();

		// block initialization
		add_action('init', [$this, 'gutenbergBlocksInit']);

		// blocks category
		if (version_compare($GLOBALS['wp_version'], '5.7', '<')) {
			add_filter('block_categories', [$this, 'gutenbergBlocksRegisterCategory'], 10, 2);
		} 
		else {
			add_filter('block_categories_all', [$this, 'gutenbergBlocksRegisterCategory'], 10, 2);
		}

		// enqueue block assets
		// add_action('enqueue_block_assets', [$this, 'gutenbergBlocksExternalLibraries']);
	}

	public static function init() {
		static $instance = false; 
		if(!$instance) {
			$instance = new self();
		}
		return $instance;
	}

	private function gutenbergBlocksConstants() {
		define('GUTENBERG_BLOCKS_VERSION', '0.1.0');
		define('GUTENBERG_BLOCKS_URL', plugin_dir_url( __FILE__ ));
		define('GUTENBERG_BLOCKS_INC_URL', GUTENBERG_BLOCKS_URL . 'includes/');		
	}

	public function gutenbergBlocksRegister($name, $options = []) {
		register_block_type(__DIR__ . '/build/blocks/' . $name, $options);
	 }

	public function gutenbergBlocksInit() {
		$this->gutenbergBlocksRegister('bootstrap');
	}

	public function gutenbergBlocksRegisterCategory($categories, $post) {
		return array_merge(
			[
				[
					'slug'  => 'gutenberg-blocks',
					'title' => __('Gutenberg Blocks', 'gutenberg-blocks'),
				],
			],
			$categories,
		);
	}

	public function gutenbergBlocksExternalLibraries() {
		wp_enqueue_script(
			'gutenberg-blocks-lib',
			 GUTENBERG_BLOCKS_INC_URL . 'js/plugin.js',
			 [],
			 GUTENBERG_BLOCKS_VERSION,
			 TRUE
			);
	}

}

GutenbergBlocks::init();
