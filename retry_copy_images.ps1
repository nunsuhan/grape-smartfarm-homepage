$src = "C:\Users\한문수\.gemini\antigravity\brain\89b0c6db-eb76-48ad-b745-1da3dd90d893"
$dest = "d:\homepage\public\images\screenshots"

if (!(Test-Path -Path $dest)) {
    New-Item -ItemType Directory -Force -Path $dest
}

$mapping = @{
    "uploaded_image_0_1768799375141.png" = "s1.png"
    "uploaded_image_1_1768799375141.png" = "s2.png"
    "uploaded_image_2_1768799375141.png" = "s3.png"
    "uploaded_image_3_1768799375141.png" = "s4.png"
    "uploaded_image_4_1768799375141.png" = "s5.png"
    "uploaded_image_0_1768799711544.png" = "s6.png"
    "uploaded_image_1_1768799711544.png" = "s7.png"
    "uploaded_image_2_1768799711544.png" = "s8.png"
}

foreach ($key in $mapping.Keys) {
    $s = Join-Path $src $key
    $d = Join-Path $dest $mapping[$key]
    if (Test-Path $s) {
        Copy-Item -Path $s -Destination $d -Force
        Write-Host "Copied $key to $($mapping[$key])"
    } else {
        Write-Host "Source file not found: $s"
    }
}
