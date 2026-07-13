param(
    [string]$TaskName = "GitDriveSync_LacquerBru",
    [string]$RepoPath = "$PWD",
    [string]$ScriptRelative = "scripts\\sync_to_drive.ps1",
    [int]$Minutes = 15
)

$action = "powershell -NoProfile -ExecutionPolicy Bypass -File `"$RepoPath\\$ScriptRelative`""
$trigger = "ONLOGON"

# Create scheduled task to run every $Minutes minutes for current user
schtasks /Create /F /SC MINUTE /MO $Minutes /TN $TaskName /TR $action /RL LIMITED > $null 2>&1
Write-Host "Scheduled task $TaskName created to run every $Minutes minutes (action: $action)"
