<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
	/**
	 * Enter description here ...
	 */
	protected function _initPlaceholders()
	{
		$loader = Zend_Loader_Autoloader::getInstance();
		$loader->registerNamespace('Admin_');
		$this->bootstrap('layout');
		$layout = $this->getResource('layout');
		$view = $layout->getView();
		$view->doctype('XHTML1_STRICT');
		$view->headTitle('HOIQUANKINHTE.COM')
		->setSeparator('');
		$view->headMeta()->appendHttpEquiv('content-type', 'text/html; charset=utf-8');
		$view->headLink();
	}

	/**
	 * Enter description here ...
	 */
	protected function _initAccess()
	{
		$authNamespace = new Zend_Session_Namespace('Zend_Auth');
		$authNamespace->setExpirationSeconds(60*15);
	}

}

