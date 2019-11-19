---
title: WordPress PHP snippets to remember
author: rkadmin
type: post
date: 2019-09-16T16:54:14+00:00
url: /wordpress-php-snippets-to-remember/
# categories:
#   - coding
#   - Interests
# tags:
#   - snippets
#   - wordpress

---
## Creating a shortcode

<pre class="wp-block-code"><code>//CREATE SHORTCODE
function rk_shortcode_init(){
	add_shortcode( 'shelter_list_v2', 'rk_shortcode' );
        add_shortcode( 'dog_shortcode', 'dog_function' );
}
//ADD SHORTCODE TO WP STACK
add_action('init', 'rk_shortcode_init');</code></pre>

## Register Scripts

<pre class="wp-block-code"><code>function register_scripts() {
    if (!is_admin()){
		wp_register_script( 'lozad', 'https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', null, null, true );
		
	        wp_enqueue_script( 'lozad' );		
 
		wp_register_script( 'petfinder-v2-scripts', plugins_url( '/petfinder-rkv2.js', __FILE__ ));
        
                wp_enqueue_script( 'petfinder-v2-scripts' );
    }

add_action('wp_enqueue_scripts', 'register_scripts', 10, 1);</code></pre>

## Adding data to options database

<pre class="wp-block-code"><code>
        $options_array['value1'] = trim($_POST['value1']);
        $options_array['value2'] = trim($_POST['value2']);
        $options_array['value3'] = trim($_POST['value3']);

       update_option('custom_option_data', $options_array);</code></pre>

## Adding data to usermeta database

<pre class="wp-block-code"><code>$user_id = 1;
$awesome_level = 1000;
add_user_meta( $user_id, '_level_of_awesomeness', $awesome_level);

//checking for errors (https://codex.wordpress.org/Function_Reference/update_user_meta)

$user_id = 1;
$new_value = 'some new value';

// will return false if the previous value is the same as $new_value
update_user_meta( $user_id, 'some_meta_key', $new_value );

// so check and make sure the stored value matches $new_value
if ( get_user_meta($user_id,  'some_meta_key', true ) != $new_value )
	wp_die('An error occurred');
?></code></pre>

## Retrieving data from database

<pre class="wp-block-code"><code>$user_last = get_user_meta( $user_id, $key, $single ); </code></pre>

## Having things occur for specific times

<pre class="wp-block-code"><code>   $current = new DateTime("now");

    //current + 1 hour
    date_add($current, date_interval_create_from_date_string('1 hour'));
    
 	
 </code></pre>