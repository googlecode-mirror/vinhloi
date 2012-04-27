<?php

/**
 * Enter description here ...
 * @author Quang Tran
 *
 */
class Admin_UserController extends Admin_Controller_Action
{

	/* (non-PHPdoc)
	 * @see Admin_Controller_Action::init()
	 */
	public function init()
	{
		parent::init();
	}

	/**
	 * Enter description here ...
	 */
	public function indexAction()
	{
		$this->_redirect('admin/user/show');
	}

	/**
	 * Enter description here ...
	 */
	public function showAction()
	{
		$user = new User();
		$list = $user->getAllUser();

		$paginator = Zend_Paginator::factory($list);
		$paginator->setItemCountPerPage($this->_getParam('limit',15))
		->setPageRange(5)
		->setCurrentPageNumber($this->_getParam('page',1));
		$this->view->pages = $paginator;
	}

	/**
	 * Enter description here ...
	 */
	public function newAction()
	{
		$request = $this->getRequest();
		if(!$request->getParam('cid')) {
			if('' !== $request->getParam('id')){
				$user = new User();
				$this->view->user = $user->getUserDetail($request->getParam('id'));

			}
		} else {
			$cid = $request->getParam('cid');
			$user = new User();
			$this->view->user = $user->getUserDetail($cid[0]);
		}
	}

	/**
	 * Enter description here ...
	 */
	public function deleteAction()
	{
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		$request = $this->getRequest();
		$ids = $request->getParam('cid');

		$user = new User();
		$user->deleteUser($ids);

		$this->_redirect('admin/user/show');		
	}

	/**
	 * Enter description here ...
	 */
	public function saveAction()
	{
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		$post = $this->getRequest()->getPost();
		$data = array(
			'username' => $post['username'],
			'email'	   => $post['email'],
			'role'	   => 'admin',			
		);

		if($post['password'] != '') {
			$data['password'] = md5($post['password']);
		}

		$user = new User();
		if($post['id'] == "") {
			$user->insertUser($data);
		} else {
			$user->updateUser($data, $post['id']);
		}

		if($post['savenew'] == 0) {
			$this->_redirect('admin/user/show');
		} else {
			$this->_redirect('admin/user/new');
		}		
	}


}

