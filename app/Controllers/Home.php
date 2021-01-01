<?php namespace App\Controllers;

class Home extends BaseController
{
	public function help()
	{
		return view('welcome_message');
	}

	
	public function index()
	{
		return view('home_page');
	}

  
    public function me()
	{
		return view('java');
	}

	//--------------------------------------------------------------------

}