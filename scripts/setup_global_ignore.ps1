param()

$globalIgnore = "$env:USERPROFILE\\.gitignore_global"
if (-not (Test-Path $globalIgnore)) { New-Item -Path $globalIgnore -ItemType File -Force | Out-Null }
if (-not (Select-String -Path $globalIgnore -Pattern "^\.tmp.driveupload/" -Quiet)) {
    Add-Content -Path $globalIgnore -Value ".tmp.driveupload/"
}
git config --global core.excludesfile $globalIgnore
Write-Host "Configured global gitignore at $globalIgnore"
