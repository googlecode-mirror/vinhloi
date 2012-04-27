<?php
class Admin_Auth_Adapter implements Zend_Auth_Adapter_Interface
{
	const NOT_FOUND_MSG = "Tài khoản không tồn tại!";
	const BAD_PW_MSG = "Mật khẩu không đúng!";

	protected $user;
	protected $username = '';
	protected $password = '';

	public function __construct($username, $password) {
		$this->username = $username;
		$this->password = $password;
	}

	public function authenticate()
	{
		try {
			$this->user = User::authenticate($this->username, $this->password);
			return $this->createResult(Zend_Auth_Result::SUCCESS);
		} catch (Exception $e) {
			if ($e->getMessage() == User::NOT_FOUND) {
				return $this->createResult(Zend_Auth_Result::FAILURE_IDENTITY_NOT_FOUND, array(self::NOT_FOUND_MSG));
			}
			if ($e->getMessage() == User::WRONG_PWD) {
				return $this->createResult(Zend_Auth_Result::FAILURE_CREDENTIAL_INVALID, array(self::BAD_PW_MSG));
			}
		}
	}

	private function createResult($code, $messages = array()) {
		return new Zend_Auth_Result($code, $this->user, $messages);
	}

}