<?php

class Default_IndexController extends BaseController
{

    public function init()
    {
    	parent::init();        
    }

    public function indexAction()
    {
        // action body
        $partner = new Partner();
        $listPartner = $partner->getAllPartnerContent();
        $this->view->listPartner = $listPartner; 
        $footer = $this->view->render('partials/footer.phtml');
    	$this->view->placeholder('footer')->set($footer);
        
        $intro = new Intro();
        $list = $intro->getAllIntroContent();   
        $this->view->list = $list;
    }


}

