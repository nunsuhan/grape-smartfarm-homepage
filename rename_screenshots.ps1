$dir = "d:\homepage\public\images\screenshots"
$mapping = @{
    "uploaded_image_0_1768799375141.png" = "s1.png"
    "uploaded_image_1_1768799375141.png" = "s2.png"
    "uploaded_image_2_1768799375141.png" = "s3.png"
    "uploaded_image_3_1768799375141.png" = "s4.png"
    "uploaded_image_4_1768799375141.png" = "s5.png"
    "uploaded_image_0_1768799711544.png" = "s6.png"
    "uploaded_image_1_1768799711544.png" = "s7.png"
    "uploaded_image_2_1768799711544.png" = "s8.png"
    "uploaded_image_0_1768807885529.png" = "s9.png"
    "uploaded_image_1_1768807885529.png" = "s10.png"
}

foreach ($key in $mapping.Keys) {
    $src = Join-Path $dir $key
    $dest = Join-Path $dir $mapping[$key]
    if (Test-Path $src) {
        Move-Item -Path $src -Destination $dest -Force
        Write-Host "Renamed $key to $($mapping[$key])"
    } else {
        Write-Host "File not found: $key"
    }
}
