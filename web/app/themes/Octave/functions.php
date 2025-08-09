<?php

/**
 * Theme Functions
 */
Timber\Timber::init();

function octave_enqueue_styles() {
    wp_enqueue_style(
        'octave-tailwind',
        get_template_directory_uri() . '/dist/css/style.css',
        array(),
        wp_get_theme()->get('Version')
    );
}
add_action('wp_enqueue_scripts', 'octave_enqueue_styles');

function octave_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'octave_theme_support');