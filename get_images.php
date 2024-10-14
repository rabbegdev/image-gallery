<?php
// get_images.php
$uploadDir = 'uploads/';
$images = glob($uploadDir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);

$imageUrls = array_map(function($image) {
    return $image;
}, $images);

header('Content-Type: application/json');
echo json_encode($imageUrls);
?>