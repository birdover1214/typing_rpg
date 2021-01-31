FROM php:7.4-fpm-buster
SHELL ["/bin/bash", "-oeux", "pipefail", "-c"]

# timezone environment
ENV TZ='Asia/Tokyo' \
  # locale
  LANG=js_JP.UTF-8 \
  LANGUAGE=js_JP:ja \
  LC_ALL=ja_JP.UTF-8 \
  # composer environment
  COMPOSER_ALLOW_SUPERUSER=1 \
  COMPOSER_HOME=/composer \
  # Laravel environment
  APP_SERVICES_CACHE=/tmp/cache/services.php \
  APP_PACKAGES_CACHE=/tmp/cache/packages.php \
  APP_CONFIG_CACHE=/tmp/cache/config.php \
  APP_ROUTES_CACHE=/tmp/cache/routes.php \
  APP_EVENTS_CACHE=/tmp/cache/events.php \
  VIEW_COMPILED_PATH=/tmp/cache/views \
  SESSION_DRIVER=cookie \
  LOG_CHANNEL=stderr \
  DB_CONNECTION=mysql \
  DB_HOST=db \
  DB_PORT=3306 \
  DB_DATABASE=typing_rpg \
  DB_USERNAME=birdover \
  DB_PASSWORD=secret

COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer

RUN apt-get update && \
  apt-get -y install git libicu-dev libonig-dev libzip-dev unzip locales && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  locale-gen ja_JP.UTF-8 && \
  localedef -f UTF-8 -i ja_JP ja_JP.UTF-8 && \
  mkdir /var/run/php-fpm && \
  mkdir -p /tmp/cache/views && \
  chmod 777 -R /tmp/cache && \
  docker-php-ext-install intl pdo_mysql zip bcmath && \
  composer config -g process-timeout 3600 && \
  composer config -g repos.packagist composer https://packagist.org

COPY ./docker/php/php-fpm.d/zzz-www.conf /usr/local/etc/php-fpm.d/zzz-www.conf
COPY ./docker/php/php.ini /usr/local/etc/php/php.ini

WORKDIR /work/app
COPY ./app/composer.json ./
COPY ./app/composer.lock ./
RUN composer install --no-scripts --no-autoloader -d ./