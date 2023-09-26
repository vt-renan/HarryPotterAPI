<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5d9b91af2ab4cea2af832789b25c428f
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Symfony\\Flex\\' => 13,
        ),
        'A' => 
        array (
            'App\\Tests\\' => 10,
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Symfony\\Flex\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/flex/src',
        ),
        'App\\Tests\\' => 
        array (
            0 => __DIR__ . '/../..' . '/tests',
        ),
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5d9b91af2ab4cea2af832789b25c428f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5d9b91af2ab4cea2af832789b25c428f::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5d9b91af2ab4cea2af832789b25c428f::$classMap;

        }, null, ClassLoader::class);
    }
}
