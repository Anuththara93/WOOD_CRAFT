<?php

require_once '../app/config/database.php';
require_once '../app/controllers/UserController.php';
require_once '../app/models/UserModel.php';

include('../app/views/aboutUs_page.php');

try {
    $userModel = new UserModel($pdo);
    $controller = new UserController($userModel);

    $action = isset($_GET['action']) ? $_GET['action'] : 'index';

    switch ($action) {
        case 'profile':
            $controller->profile();
            break;
        default:
            $controller->index();
            break;
    }
} 
catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
