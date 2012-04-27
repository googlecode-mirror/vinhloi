<?php

class Admin_AuthController extends Admin_Controller_Action
{

	public function init()
	{
		//parent::init();
		$this->_helper->layout->disableLayout();
		/* Initialize action controller here */		
	}

	public function indexAction()
	{
		// action body
		if(Zend_Auth::getInstance()->hasIdentity()) {
			$this->_forward('index','index','admin');
		} else {
			$this->_forward('login');
		}
	}

	public function loginAction()
	{
		$username = $this->_getParam('username');
		$password = md5($this->_getParam('passwd'));
		
		if($this->getRequest()->isPost()) {
			$adapter = new Admin_Auth_Adapter($username, $password);
			$result = Zend_Auth::getInstance()->authenticate($adapter);
			if ($result->isValid()) {
				$this->_redirect('admin/index');
			} else {
				$this->view->message = implode(' ', $result->getMessages());				
			}
		}
			
	}

	public function logoutAction()
	{
		Zend_Auth::getInstance()->clearIdentity();
		$this->_redirect('admin/auth');
	}


}

