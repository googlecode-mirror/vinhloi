<?php

class Admin_IndexController extends Admin_Controller_Action
{

    public function init()
    {
    	parent::init();
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $this->_redirect('/admin/intro');
    }


}

