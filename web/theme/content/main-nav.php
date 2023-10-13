          <header class="page-header page-header__container-fluid">
              <div class="page-header__logo-box">
                  <a href="<?php echo home_url('/'); ?>" class="page-header__navbar-brand">
                      <img src="<?php echo get_template_directory_uri(); ?>/media/images/logo-wh.png"
                          alt="Logo of PISO Portfolio" class="page-header__site-logo-image">
                  </a>
              </div>

              <div class="page-header__navigation-container">
                  <div class="page-header__dark-mode-container">
                      <div class="page-header__dark-mode-content">
                          <input type="checkbox" class="checkbox" id="checkbox">
                          <label for="checkbox" class="checkbox-label">
                              <span class="mode-off-on"></span>
                          </label>
                      </div>
                      <span class="page-header__dark-mode-text">Dark On</span>
                  </div>
                  <div class="page-header__nav-button" id="toggle">
                      <span class="navbar-top"></span>
                      <span class="navbar-middle"></span>
                      <span class="navbar-bottom"></span>
                  </div>

                  <div class="nav-overlay" id="nav-overlay">
                      <nav class="nav-overlay__nav-overlay-menu" id="nav-overlay-menu">

                          <?php if (have_rows('header_menu')) : ?>

                          <ul class="nav-overlay__nav-list">

                              <?php while (have_rows('header_menu')) : the_row(); ?>

                              <li class="nav-overlay__item"><a href="<?php the_sub_field('menu_link'); ?>"
                                      class="nav-overlay__link"><?php the_sub_field('menu_link_text'); ?></a></li>

                              <?php endwhile; ?>

                          </ul>

                          <?php endif; ?>

                          <div class="foot-nav__nav foot-nav__social-media-nav">
                              <div class="foot-nav__nav row">

                                  <?php if (have_rows('social_media_list')) : ?>

                                  <ul class="foot-nav__nav-social foot-nav__social-media-item">

                                      <?php while (have_rows('social_media_list')) : the_row(); ?>

                                      <li class="foot-nav__nav-social-item"><a
                                              href="<?php the_sub_field('social_media_link'); ?>"
                                              class="foot-nav__social-link" target="_blank">
                                              <?php the_sub_field('social_media_icon_html'); ?></a>
                                      </li>

                                      <?php endwhile; ?>

                                  </ul>

                                  <?php endif; ?>

                              </div>
                          </div>
                      </nav>
                  </div>
              </div>
          </header>