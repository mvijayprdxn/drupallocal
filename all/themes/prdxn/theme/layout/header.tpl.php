<div class="row">
  <div class="col-lg-12">
    <header id="navbar" role="banner" class="navbar container-fluid navbar-inverse navbar-fixed-top">
 <div class="container-fluid">

   <div class="navbar-header">
     <?php if ($logo): ?>
     <a class="logo navbar-btn pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
       <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
     </a>
     <a href="<?php print $front_page; ?>" title="<?php print t('prdxn'); ?>" id="logo" class="logo-swap">
            <img src="<?php print base_path() . path_to_theme(); ?>/images/swap.logo.png" alt="<?php print t('prdxn'); ?>" />
          </a>
     <?php endif; ?>      <?php if (!empty($site_name)): ?>
<!--      <a class="name navbar-brand" href="<?php// print $front_page; ?>" title="<?php //print t('Home'); ?>"><?php //print $site_name; ?></a>-->
     <?php endif; ?>      <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
     <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
       <span class="sr-only">Toggle navigation</span>
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
     </button>
   </div>
   <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
     <div class="navbar-collapse collapse navbar-left">
       <nav role="navigation">
         <?php if (!empty($primary_nav)): ?>
           <?php print render($primary_nav); ?>
         <?php endif; ?>
         <?php if (!empty($secondary_nav)): ?>
           <?php print render($secondary_nav); ?>
         <?php endif; ?>
         <?php if (!empty($page['navigation'])): ?>
           <?php print render($page['navigation']); ?>
         <?php endif; ?>
       </nav>
     </div>
   <?php endif; ?>
   
   <div class="navbar-collapse collapse navbar-right">
     <?php print render($page['navbar_right']); ?>
   </div>
 </div>
</header>
  </div>
</div>