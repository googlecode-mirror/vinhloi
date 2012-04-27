<?php
class Intro {
	/**
	 * Biến dùng truy cập database
	 * @var Zend_Db
	 */
	protected $db;

	/**
	 * Hàm khởi tạo không tham số, lấy db từ Zend_Registry
	 */
	public function Intro(){
		$this->db = Zend_Registry::get('db');
	}

	/**
	 * Enter description here ...
	 * @return unknown
	 */
	public function getAllIntroContent() {
		$row = $this->db->fetchAll("SELECT * FROM intro WHERE active = 1");
		return $row;
	}

	/**
	 * Enter description here ...
	 * @return unknown
	 */
	public function getAllIntroAdmin() {
		$row = $this->db->fetchAll("SELECT * FROM intro");
		return $row;
	}


	/**
	 * Enter description here ...
	 * @param string $id
	 * @return array Intro
	 */
	public function getIntroDetail($id) {
		$row = $this->db->fetchRow("SELECT * FROM intro WHERE id = ? ORDER BY sort DESC", array($id));
		return $row;
	}

	/**
	 * Enter description here ...
	 * @param array $arr
	 * @param string $id
	 */
	public function insertIntro($data) {
		$result = $this->db->insert('intro', $data);
		return $result;
	}

	/**
	 * Enter description here ...
	 * @param array $data
	 * @param string $id
	 */
	public function updateIntro($data, $id) {
		$result = $this->db->update('intro', $data, 'id=' . $id);
		return $result;
	}

	/**
	 * Enter description here ...
	 * @param array $cid
	 */
	public function deleteIntro($cid) {
		$listid = implode("','", $cid);
		$result = $this->db->delete('intro', "id in ('".$listid."')");
	}


	/**
	 * Enter description here ...
	 * @param unknown_type $id
	 * @param unknown_type $active
	 */
	public function setActive($id, $active) {
		$active= intval($active);
		$this->db->update("intro", array('active'=>$active), "id=".$id);
	}
	
	

}