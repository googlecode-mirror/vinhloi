<?php
class User {
	
	const NOT_FOUND = 1;
	const WRONG_PWD = 2;
	
	protected $db;
	/**
	 * partner contructor function.
	 */
	public function User(){
		$this->db = Zend_Registry::get('db');
	}

	/**
	 * Enter description here ...
	 * @return array of partners
	 */
	public function getAllUser() {
		$row = $this->db->fetchAll("SELECT * FROM user");
		return $row;
	}


	/**
	 * Enter description here ...
	 * @param unknown_type $id
	 */
	public function getUserDetail($id) {
		$row = $this->db->fetchRow("SELECT * FROM user WHERE id = ?", array($id));
		return $row;
	}

	/**
	 * Enter description here ...
	 * @param array $arr
	 * @param string $id
	 */
	public function insertUser($data) {
		$result = $this->db->insert('user', $data);
		return $result;
	}

	/**
	 * Enter description here ...
	 * @param array $arr
	 * @param string $id
	 */
	public function updateUser($data, $id) {
		$result = $this->db->update('user', $data, 'id='.$id);
		return $result;
	}


	/**
	 * Enter description here ...
	 * @param string $id
	 */
	public function deleteUser($ids) {
		$listid = implode("','", $ids);
		$result = $this->db->delete('user', "id in ('".$listid."')");
	}

	/**
	 * Enter description here ...
	 */
	public function __destruct() {
		unset($this->db);
	}
	
	public function getUserByUsername($username) {
		$row = $this->db->fetchRow("SELECT * FROM user WHERE username = ?", array($username));
		return $row;
	}
	

	public static function authenticate($username, $password)
	{
		$user = new User();
		$user = $user->getUserByUsername($username);
		if ($user) {
			if ($password == $user['password']) {
				return $user;
			}
			throw new Exception(self::WRONG_PWD);
		}
		throw new Exception(self::NOT_FOUND);
	}

}