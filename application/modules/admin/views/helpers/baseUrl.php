<?php
class Zend_View_Helper_BaseUrl {
	public function baseUrl()
	{
		$front = Zend_Controller_Front::getInstance();		
		return $front->getBaseUrl();
	}
}

?>