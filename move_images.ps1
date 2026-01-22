$source = "d:\homepage"
$dest = "d:\homepage\public\images\new_gallery"
mkdir $dest -Force

$files = Get-ChildItem "$source\Gemini_Generated_Image_*.png"
$count = 1

foreach ($file in $files) {
    if ($count -le 9) {
        $newName = "g$count.png"
        Move-Item $file.FullName "$dest\$newName" -Force
        $count++
    }
}

Write-Host "Moved $($count-1) images to $dest"
