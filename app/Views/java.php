<html>
<head>
  <?php echo view('links'); ?>
</head>
<body>

  <!-- header session -->


  <?php echo view('head'); ?>


  <!-- end of header session -->


  <h1>Regular Expression Page!</h1>
  <h3 id="demo">Click the button to See your Name!.</h3>
  <button onclick="myLolz()">Try it</button>
  <p id="boy"></p>

<!-- Scroll stuff -->
	<div class="col-1">
  		<!-- <img id="myImg" src="<?php// echo base_url('image/picture.jpg');?>" width="304" height="228"> -->
	</div> 

  <!-- Java display session -->
  <?php echo view('display'); ?>
  <?php // echo view('links'); ?>


  <!-- footer session -->
  <?php echo view('footer'); ?>
</body>
</html>