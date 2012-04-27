<?php

// Define path to application directory
defined('APPLICATION_PATH')
|| define('APPLICATION_PATH', realpath(dirname(__FILE__) . '/application'));

// Define application environment
defined('APPLICATION_ENV')
|| define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : 'production'));




// Ensure library/ is on include_path

set_include_path(implode(PATH_SEPARATOR, array(
realpath(APPLICATION_PATH . '/../library'),
get_include_path(),
)));

//set_include_path(APPLICATION_PATH.'/library/admin'.PATH_SEPARATOR.get_include_path());
set_include_path(APPLICATION_PATH.'/models'.PATH_SEPARATOR.get_include_path());
set_include_path(APPLICATION_PATH.'/modules/default/controllers'.PATH_SEPARATOR.get_include_path());



/** Zend_Application */
require_once 'Zend/Application.php';

// Create application, bootstrap, and run
$application = new Zend_Application(
APPLICATION_ENV,
APPLICATION_PATH . '/configs/application.ini'
);

$config = new Zend_Config_Ini(APPLICATION_PATH.'/configs/databases.ini','production');
$db = Zend_Db::factory($config->resources->db);
Zend_Db_Table_Abstract::setDefaultAdapter($db);
$db->query( 'SET NAMES utf8' );
$db->query( 'SET CHARACTER SET utf8' );

Zend_Registry::set('db', $db);


define("TEMPLATE_URL","templates");
define("UPLOAD_URL","upload");

/** start auto loader */
$loader=Zend_Loader_Autoloader::getInstance();
$loader->setFallbackAutoloader(true);

$application->bootstrap()
->run();
