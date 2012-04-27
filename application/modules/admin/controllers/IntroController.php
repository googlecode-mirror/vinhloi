<?php

class Admin_IntroController extends Admin_Controller_Action
{

	public function init()
	{
		parent::init();
	}

	/**
	 * Enter description here ...
	 */
	public function indexAction()
	{
		$this->_redirect('admin/intro/show');
	}

	/**
	 * Enter description here ...
	 */
	public function showAction()
	{
		$intro = new Intro();
		$list = $intro->getAllIntroAdmin();

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
				$intro = new Intro();
				$this->view->intro = $intro->getIntroDetail($request->getParam('id'));

			}
		} else {
			$cid = $request->getParam('cid');
			$intro = new Intro();
			$this->view->intro = $intro->getIntroDetail($cid[0]);
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
		//Zend_Debug::dump($ids);
		$intro = new Intro();
		$intro->deleteIntro($ids);
		$this->_redirect('admin/intro/show');
			
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
			'name' => $post['name'],
			'alias'	   => $post['alias'],
			'link'	   => $post['link'],
			'sort'	   => $post['sort'],
			'description' => $post['desc'],						
		);

		if(isset($post['active'])) {
			$data['active'] = 1;
		}

		if($_FILES['icon']['name'] != '') {
			$upload = new Zend_File_Transfer_Adapter_Http();
			$upload->setDestination($_SERVER['DOCUMENT_ROOT']."/upload/icons/");
			$name = $upload->getFileName('icon',false);
			$ext = split("\.",$name );
			$newName = md5($name).'.'.$ext[count($ext)-1];

			$upload->addFilter('Rename', array('target' => $_SERVER['DOCUMENT_ROOT']."/upload/icons/".$newName,
                     'overwrite' => true));

			try {
				$upload->receive();
				$data['logo'] = $newName;
			} catch (Zend_File_Transfer_Exception $e) {
				$e->getMessage();
			}


		}
		//Zend_Debug::dump($post);

		$intro = new Intro();
		if($post['id'] == "") {
			$intro->insertIntro($data);
		} else {
			$intro->updateIntro($data, $post['id']);
		}

		if($post['savenew'] == 0) {
			$this->_redirect('admin/intro/show');
		} else {
			$this->_redirect('admin/intro/new');
		}

	}

	public function activeAction() {
		$id = $this->_getParam('id',0);
		$intro = new Intro();
		$active = $intro->getIntroDetail($id);
	

		if($active['active'] == "1") {
			$intro->setActive($id, 0);	
			echo "0";
		} else if($active['active'] == "0") {
			$intro->setActive($id, 1);	
			echo "1";
		} else echo "3";

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
	}

}

