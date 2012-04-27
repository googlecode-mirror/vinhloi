<?php

class Admin_PartnerController extends Admin_Controller_Action
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
		$this->_redirect('admin/partner/show');
	}

	/**
	 * Enter description here ...
	 */
	public function showAction()
	{
		$partner = new Partner();
		$list = $partner->getAllPartnerAdmin();

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
				$partner = new Partner();
				$this->view->partner = $partner->getDetailPartner($request->getParam('id'));

			}
		} else {
			$cid = $request->getParam('cid');
			$partner = new Partner();
			$this->view->partner = $partner->getPartnerDetail($cid[0]);
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
		$partner = new Partner();
		$partner->deletePartner($ids);
		$this->_redirect('admin/partner/show');
			
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
			'link'	   => $post['link'],								
		);

		if(isset($post['active'])) {
			$data['active'] = 1;
		}

		if($_FILES['logo']['name'] != '') {
			$upload = new Zend_File_Transfer_Adapter_Http();
			$upload->setDestination($_SERVER['DOCUMENT_ROOT']."/upload/logos/");
			$name = $upload->getFileName('logo',false);
			$ext = split("\.",$name );
			$newName = md5($name).'.'.$ext[count($ext)-1];

			$upload->addFilter('Rename', array('target' => $_SERVER['DOCUMENT_ROOT']."/upload/logos/".$newName,
                     'overwrite' => true));

			try {
				$upload->receive();
				$data['image'] = $newName;
			} catch (Zend_File_Transfer_Exception $e) {
				$e->getMessage();
			}


		}
		//Zend_Debug::dump($post);

		$partner = new Partner();
		if($post['id'] == "") {
			$partner->insertPartner($data);
		} else {
			$partner->updatePartner($data, $post['id']);
		}

		if($post['savenew'] == 0) {
			$this->_redirect('admin/partner/show');
		} else {
			$this->_redirect('admin/partner/new');
		}

	}

	public function activeAction() {
		$id = $this->_getParam('id',0);
		$partner = new Partner();
		$active = $partner->getDetailPartner($id);


		if($active['active'] == "1") {
			$partner->setActive($id, 0);
			echo "0";
		} else if($active['active'] == "0") {
			$partner->setActive($id, 1);
			echo "1";
		} else echo "3";

		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
	}


}

