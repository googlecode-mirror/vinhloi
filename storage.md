<?php

/
  * @author      :   DungCV
  * @name        :   My\_Business\_Storage\_Coupon
  * @version     :   1.0
  * @copyright   :   FPT Online
  * 
class My\_Business\_Storage\_Coupon {

> /
    * 
    * @var 

&lt;type&gt;


    * 
> protected static $_instance = null;
> /
    * table name
    * @var string $_table
    * 
> private static $_table = "coupons";_

> /
    * Constructor of class
    * we don't permit an explicit call of the constructor! (like $v = new Singleton())
    * 
> protected function construct() {

> }

> /
    * Get singleton instance
    * @return My\_Business\_Storage\_Coupon
    * 
> public final static function getInstance() {
> > //Check instance
> > if (is\_null(self::$_instance)) {
> > > self::$_instance = new self();

> > }


> //Return instance
> return self::$_instance;
> }_

> /
    * Insert
    * @param int $p\_intUserID
    * @param array $p\_arrData
    * @return int $result : last inserted ID
    * 
> public function insert($p\_intUserID, $p\_arrData) {
> > try {
> > > //Get DB GLOBAL
> > > $storage = My\_Global::getDbMasterBusiness();


> $intID = My\_Global::getMaxID('coupon');

> $p\_arrData['coupon\_id'] = $intID;

> //Insert Data
> $result = $storage->insert(self::$_table, $p\_arrData);_

> if ($result) {
> > $result = $intID;

> }

> //Return
> return $result;
> } catch (Exception $e) {
> > return 0;

> }
> }

> /
    * Delete
    * @param int $p\_intUserID
    * @param int $p\_intCouponID
    * @return int $result : 1 success
    * 
> public function delete($p\_intUserID, $p\_intCouponID) {
> > try {
> > > //Get DB GLOBAL
> > > $storage = My\_Global::getDbMasterBusiness();


> //Delete data
> $result = $storage->delete(self::$_table,'user\_id='.$p\_intUserID.' AND coupon\_id='.$p\_intCouponID);_

> return $result;
> } catch (Exception $e) {
> > return 0;

> }
> }

> /
    * Update
    * @param int $p\_intUserID
    * @param int $p\_intCouponID
    * @param array $p\_arrData
    * @return int $result : 1 success
    * 
> public function update($p\_intUserID, $p\_intCouponID, $p\_arrData) {
> > try {
> > > //Get DB GLOBAL
> > > $storage = My\_Global::getDbMasterBusiness();


> //Update data
> $result = $storage->update(self::$_table, $p\_arrData, 'user\_id='.$p\_intUserID.' AND coupon\_id='.$p\_intCouponID);
> return $result;
> } catch (Exception $e) {
> > return 0;

> }
> }_

> /
    * Get detail
    * @param int $p\_intUserID
    * @param int $p\_intCouponID
    * @return array $result
    * 
> public function getDetailByID($p\_intUserID, $p\_intCouponID) {
> > try {
> > > //Get DB GLOBAL
> > > $storage = My\_Global::getDbMasterBusiness();


> $stmt = $storage->prepare("SELECT _FROM " . self::$**table . " WHERE user\_id=:p\_UserID AND coupon\_id=:p\_CouponID;");
> $stmt->bindParam('p\_UserID', $p\_intUserID, PDO::PARAM\_INT);
> $stmt->bindParam('p\_CouponID', $p\_intCouponID, PDO::PARAM\_INT);**

> //Excute
> $stmt->execute();_

> //Fetch Result
> $result = $stmt->fetch();

> //Return array
> return $result;

> } catch (Exception $e) {
> > return array();

> }
> }

> /
    * Get list by condition
    * @param array $p\_arrCondition
    * @return array $result
    * 
> public function getList($p\_arrCondition) {
> > $result = array();
> > try {
> > > if (!empty($p\_arrCondition)) {
> > > > $strWhere = $this->condition($p\_arrCondition);

> > > }


> //Get DB GLOBAL
> $storage = My\_Global::getDbMasterBusiness();

> $select = $storage->select()
> > ->from(self::$**table, '_')
> > ->order($p\_arrCondition['ordering']? $p\_arrCondition['ordering'] :'coupon\_id DESC')
> > ->where('1=1' . $strWhere);

> $result = $storage->fetchAll($select);
> //Return array
> return $result;
> } catch (Exception $e) {
> > return $result;

> }
> }_

> /***** Get list limit by condition
    * @param array $p\_arrCondition
    * @param int   $p\_intPage
    * @param int   $p\_intLimit
    * @return array $result
    * 
> public function getListLimit($p\_arrCondition, $p\_intPage, $p\_intLimit) {
> > try {
> > > if (!empty($p\_arrCondition)) {
> > > > $strWhere = $this->condition($p\_arrCondition);

> > > }**


> //Get DB GLOBAL
> $storage = My\_Global::getDbMasterBusiness();

> $select = $storage->select()
> > ->from(self::$_table, '**')
> > > ->order('coupon\_id DESC')

> > ->where('1=1' . $strWhere)
> > ->limit($p\_intLimit, $p\_intLimit** ($p\_intPage - 1));

> $result = $storage->fetchAll($select);_

> //Return array
> return $result;
> } catch (Exception $e) {
> > return array();

> }
> }

> /
    * Count total by condition
    * @param array $p\_arrCondition
    * @return int $result
    * 
> public function getTotal($p\_arrCondition) {
> > $result = 0;
> > try {
> > > if (!empty($p\_arrCondition)) {
> > > > $strWhere = $this->condition($p\_arrCondition);

> > > }


> //Get DB GLOBAL
> $storage = My\_Global::getDbMasterBusiness();

> $stmt = $storage->prepare("SELECT COUNT(coupon\_id) as total FROM " . self::$_table . " WHERE 1=1" . $strWhere);_

> //Excute
> $stmt->execute();

> //Fetch Result
> $result = $stmt->fetch();

> //Return
> if ($result) {
> > $result = $result['total'];

> }
> return $result;
> } catch (Exception $e) {
> > return $result;

> }
> }

> /
    * Build condition string
    * @param array $p\_arrCondition
    * @return string $result
    * 
> private function condition($p\_arrCondition=array()) {
> > $result = '';
> > if(isset($p\_arrCondition['begin\_date'])){
> > > $result .= " AND begin\_date BETWEEN " . $p\_arrCondition['begin\_date'] . " AND " . ($p\_arrCondition['begin\_date'] + (60\*60\*24-1));

> > }


> if (isset($p\_arrCondition['status'])) {
> > $result .= " AND coupon\_status=" . $p\_arrCondition['status'];

> }

> if (isset($p\_arrCondition['user\_id'])) {
> > $result .= " AND user\_id=" . $p\_arrCondition['user\_id'];

> }

> return $result;
> }
}