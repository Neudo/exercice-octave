<?php

$context = \Timber\Timber::context();
$context['title'] = 'Octave Octave';
$context['content'] = 'Contenu de la page';

\Timber\Timber::render('pages/index.twig', $context);