Add-Type -AssemblyName System.Drawing
try {
    $img = [System.Drawing.Image]::FromFile("D:\homepage\public\images\screen.png")
    Write-Host "Resolution: $($img.Width) x $($img.Height)"
    $img.Dispose()
} catch {
    Write-Host "Error reading image: $_"
}
