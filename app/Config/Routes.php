<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Customer::index');
$routes->get('new','Customer::create');
$routes->post('/','Customer::save');
$routes->get('edit/(:num)','Customer::edit/$1');
$routes->post('edit/(:num)','Customer::update/$1');
$routes->get('delete/(:num)','Customer::delete/$1');