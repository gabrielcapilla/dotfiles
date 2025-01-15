# EXA
alias xls='exa -alh'
alias xtree='exa --tree'

# RSYNC
alias cpr='rsync -azhP'
alias mvr='rsync -azhP --remove-source-files'

# PARU
alias paru.clean='paru -Sc'
alias paru.remove='paru -Rs'
alias pacman.clean='paccache -r'
alias paru.pkglist='paru -Qqe > pkglist.txt'

# CODE
alias code.dotfiles='code $HOME/.dotfiles'
alias code.fish='code $HOME/.dotfiles/xiaomi/fish/.config/fish'
alias code.helix='code $HOME/.dotfiles/xiaomi/helix/.config/helix'
alias code.ghostty='code $HOME/.dotfiles/xiaomi/ghostty/.config/ghostty'
alias code.alacritty='code $HOME/.dotfiles/xiaomi/alacritty/.config/alacritty'

# HELIX
alias helix.dotfiles='helix $HOME/.dotfiles'
alias helix.fish='helix $HOME/.dotfiles/xiaomi/fish/.config/fish'
alias helix.helix='helix $HOME/.dotfiles/xiaomi/helix/.config/helix'
alias helix.ghostty='helix $HOME/.dotfiles/xiaomi/ghostty/.config/ghostty'
alias helix.alacritty='helix $HOME/.dotfiles/xiaomi/alacritty/.config/alacritty'

# ZED
alias zed.dotfiles='zeditor $HOME/.dotfiles'
alias zed.fish='zeditor $HOME/.dotfiles/xiaomi/fish/.config/fish'
alias zed.helix='zeditor $HOME/.dotfiles/xiaomi/helix/.config/helix'
alias zed.ghostty='zeditor $HOME/.dotfiles/xiaomi/ghostty/.config/ghostty'
alias zed.alacritty='zeditor $HOME/.dotfiles/xiaomi/alacritty/.config/alacritty'

# PYTHON VIRTUAL ENVIRONMENT
# USE UV INSTEAD VANILLA PIP
alias up.piper='uv pip install --upgrade piper'
# alias up.spotdl='pip install --upgrade spotdl'
alias up.spotdl='uv pip install --upgrade spotdl'
alias up.gitingest='uv pip install --upgrade gitingest'
