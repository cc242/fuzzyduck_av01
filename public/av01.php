<?php
/**
 * Plugin Name: AV01 Site data
 * Description: Custom endpoint for AV01
 * Version: 1.0
 */


function getPosts($name)
{
    $args = [
        'numberposts' => 999999,
        'post_type' => $name
    ];
    $posts = get_posts($args);
    $i = 0;
    foreach ($posts as $post) {
        $data[$i]['id'] = $post->ID;
        $data[$i]['title'] = $post->post_title;
        $data[$i]['slug'] = $post->post_name;
        $data[$i]['acf'] = $post->acf = get_fields($post->ID);
        $i++;
    }

    return $data;
}

function wl_posts()
{
    $arr = [
        "people" => getPosts('person')
    ];

    json_encode($arr);
    return $arr;
}

add_action('rest_api_init', function () {
    register_rest_route('aka/', 'site', [
        'methods' => 'GET',
        'callback' => 'wl_posts',
    ]);
});
