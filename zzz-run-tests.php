<?php
echo '<pre>';
$output = '';
$status = '';

passthru('mocha ./tests/testrun-mocha-check-core.js 2>&1');
passthru('mocha ./tests/testrun-mocha-check-es3.js 2>&1');

print_r($output);
print_r($status);
echo '</pre>';