param()

# Sync working tree to Google Drive target set in local git config `drive.sync.path`
$src = (Get-Location).Path
$dest = git config --local drive.sync.path 2>$null
# Normalize backslashes in case the path was stored with escaped backslashes
if ($dest) { $dest = $dest -replace '\\', '\' }
if (-not $dest) {
    Write-Host "drive.sync.path not set; skipping sync"
    exit 0
}

if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Path $dest -Force | Out-Null
}

# Exclude the .git directory and Drive temp folders
$gitDir = Join-Path $src '.git'
$tmpDrive = Join-Path $src '.tmp.driveupload'

# Run robocopy to mirror the working tree into the Drive folder, excluding .git and temp uploads
Write-Host "Syncing $src -> $dest"
robocopy $src $dest /MIR /XD $gitDir $tmpDrive /R:2 /W:2 /NFL /NDL /NJH /NJS /NP | Out-Null

exit 0
