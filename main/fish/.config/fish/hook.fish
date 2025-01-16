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
alias code.dotfiles='code $HOME/.dotfiles/'
alias code.fish='code $HOME/.dotfiles/main/fish/.config/fish/'
alias code.helix='code $HOME/.dotfiles/main/helix/.config/helix/'
alias code.ghostty='code $HOME/.dotfiles/main/ghostty/.config/ghostty/'
alias code.alacritty='code $HOME/.dotfiles/main/alacritty/.config/alacritty/'

# HELIX
alias helix.dotfiles='helix $HOME/.dotfiles/main'
alias helix.fish='helix $HOME/.dotfiles/main/fish/.config/fish'
alias helix.helix='helix $HOME/.dotfiles/main/helix/.config/helix'
alias helix.ghostty='helix $HOME/.dotfiles/main/ghostty/.config/ghostty'
alias helix.alacritty='helix $HOME/.dotfiles/main/alacritty/.config/alacritty'

# ZED
alias zed.dotfiles='zeditor $HOME/.dotfiles'
alias zed.fish='zeditor $HOME/.dotfiles/main/fish/.config/fish'
alias zed.helix='zeditor $HOME/.dotfiles/main/helix/.config/helix'
alias zed.ghostty='zeditor $HOME/.dotfiles/main/ghostty/.config/ghostty'
alias zed.alacritty='zeditor $HOME/.dotfiles/main/alacritty/.config/alacritty'

# PYTHON VIRTUAL ENVIRONMENT
# USE UV INSTEAD VANILLA PIP
alias up.piper='uv pip install --upgrade piper'
# alias up.spotdl='pip install --upgrade spotdl'
alias up.spotdl='uv pip install --upgrade spotdl'
alias up.gitingest='uv pip install --upgrade gitingest'
