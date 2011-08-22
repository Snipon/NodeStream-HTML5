<?php

// Get the app settings to see if debug mode is on
//require("config/appconfig.php");

header('Content-Type: text/cache-manifest');

echo "CACHE MANIFEST\n";

/**
 *
 * Hash all 'static' resources and folders (css, js, images) to see if any have changed or added,
 * if so the manifest file will give a different output
 * which will reload all the resources, otherwise it will use cached
 * versions, which makes the app load faster, and gives.
 *
 */
$hashes = "";

/*
 * Shouldn't load several css and js files on production environment.
 * Use a plugin such as minify...
*/

// Include the css files
$dir = new RecursiveDirectoryIterator("css");
foreach(new RecursiveIteratorIterator($dir) as $file) {
	if($file->IsFile() && substr($file->getFilename(), 0, 1) != ".") {
		echo $file . "\n";
    $hashes .= md5_file($file);
	}
}

// Include the javascript files
$dir = new RecursiveDirectoryIterator("js");
foreach(new RecursiveIteratorIterator($dir) as $file) {
	if($file->IsFile() && substr($file->getFilename(), 0, 1) != ".") {
		echo $file . "\n";
    $hashes .= md5_file($file);
	}
}

// Include the basic theme images
$dir = new RecursiveDirectoryIterator("images");
foreach(new RecursiveIteratorIterator($dir) as $file) {
	if($file->IsFile() && substr($file->getFilename(), 0, 1) != ".") {
		echo $file . "\n";
    $hashes .= md5_file($file);
	}
}

echo "\nNETWORK:\n*\n\n";

// Gives an asset hash to check against the cached manifest file to see if any file has been updated.
echo "#AssetHash: " . md5($hashes) . "\n";

// Change the numbers in some way to force the app to update cache
echo "#ForceUpdate: 1213  \n\n";

// Shouldn't be necessary, but might be
//header('Content-Type: text/cache-manifest');
?>
