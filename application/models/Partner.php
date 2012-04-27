<?php
/**
 * Partner model
 * @author Quang Tran
 *
 */
class Partner {
	protected $db;
	/**
	 * partner contructor function.
	 */
	public function Partner(){
		$this->db = Zend_Registry::get('db');
	}

	/**
	 * Enter description here ...
	 * @return array of partners
	 */
	public function getAllPartnerContent() {
		$row = $this->db->fetchAll("SELECT * FROM partner WHERE active = 1");
		return $row;
	}

	/**
	 * Enter description here ...
	 * @return array of partners
	 */
	public function getAllPartnerAdmin() {
		$row = $this->db->fetchAll("SELECT * FROM partner");
		return $row;
	}

	/**
	 * Enter description here ...
	 * @return array of partners
	 */
	public function getDetailPartner($id) {
		$row = $this->db->fetchRow("SELECT * FROM partner WHERE id = ?", array($id));
		return $row;
	}

	/**
	 * Enter description here ...	
	 * @param string $id
	 */
	public function insertPartner($data) {
		$result = $this->db->insert('partner', $data);
		return $result;
	}

	/**
	 * Enter description here ...
	 * @param array $data
	 * @param string $id
	 */
	public function updatePartner($data, $id) {
		$result = $this->db->update('partner', $data, 'id = ' . $id);
		return $result;
	}
	
	public function deletePartner($ids) {
		$listid = implode("','", $ids);		
		$result = $this->db->delete('partner', "id in ('".$listid."')");
	}

	/**
	 * Enter description here ...
	 * @param string $active
	 * @param string $id
	 */
	public function setActive($id, $active) {
		$result = $this->db->update('partner', array('active'=>$active), 'id = ' . $id);
		return $result;
	}
}