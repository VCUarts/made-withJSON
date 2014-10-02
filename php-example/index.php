<!doctype html>
<head>

  <meta charset="utf-8">

  <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <!-- Important stuff for SEO, don't neglect. (And don't dupicate values across your site!) -->
  <title>VCUarts beings.json JS Example</title>

  <!--  Mobile Viewport
  http://j.mp/mobileviewport & http://davidbcalhoun.com/2010/viewport-metatag
  device-width : Occupy full width of the screen in its current orientation
  initial-scale = 1.0 retains dimensions instead of zooming out if page height > device height
  maximum-scale = 1.0 retains dimensions instead of zooming in if page width < device width (wrong for most sites)
  -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <link rel="stylesheet" href="../css/style.css" />

</head>
<body>

<div id="main">

<?php 
  $contents = file_get_contents('../beings.json');
  $json = json_decode($contents, true);

  $people = $json['being'];

  foreach ($people as $person) { ?>
  
    <div class="being">
      <img src="<?php echo $person['photo']; ?>">
      <h4><?php echo "{$person['firstName']} "; echo $person['lastName']; ?></h4>
      <p><?php echo $person['bio']; ?></p>
    </div>

    <?php
  }

?>

</div>

</body>

</html>