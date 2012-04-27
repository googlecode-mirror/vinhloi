<?php
Class Admin_Controller_Action extends Zend_Controller_Action {
	public function init() {
		parent::init();
		if(!Zend_Auth::getInstance()->hasIdentity()) {
			$this->_redirect('admin/auth');
		}
		$layout = Zend_Layout::getMvcInstance();
		$layout->setLayoutPath(APPLICATION_PATH. "/layouts/scripts/");
		$layout->setLayout('admin');
	}

}