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
alias code.fish='code $HOME/.dotfiles/Configs/fish/.config/fish'
alias code.helix='code $HOME/.dotfiles/Configs/helix/.config/helix'
alias code.alacritty='code $HOME/.dotfiles/Configs/alacritty/.config/alacritty'
alias code.userchrome='code $HOME/.mozilla/firefox/t729syma.default-release/chrome/'

# HELIX
alias helix.dotfiles='helix $HOME/.dotfiles'
alias helix.fish='helix $HOME/.dotfiles/Configs/fish/.config/fish'
alias helix.helix='helix $HOME/.dotfiles/Configs/helix/.config/helix'
alias helix.alacritty='helix $HOME/.dotfiles/Configs/alacritty/.config/alacritty'
alias helix.userchrome='helix $HOME/.mozilla/firefox/t729syma.default-release/chrome/'


# PYTHON VIRTUAL ENVIRONMENT
# alias up.spotdl='pip install --upgrade spotdl'
# USE UV INSTEAD OF VANILLA PIP
alias up.spotdl='uv pip install --upgrade spotdl'
