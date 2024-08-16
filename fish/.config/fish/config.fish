source /usr/share/cachyos-fish-config/cachyos-config.fish
source $HOME/.config/fish/syntax.fish

# NIM & NIMBLE
set -ga fish_user_paths $HOME/.nimble/bin

# PYTHON
set -gx PATH $HOME/.local/bin $PATH

# DEFAULT TERMINAL TEXT EDITOR
export EDITOR='helix'
export VISUAL='helix'

# SYSTEM ACTIONS
alias :q='exit'
alias :q!='exit'
alias :c='clear'
alias back='cd ..'
alias zls='exa -alh'
alias zc='rsync -azhP'
alias ztree='exa --tree'
alias apagar='shutdown now'
alias reiniciar='shutdown -r now'
alias zclean='paru -c  && paru -Sc'
alias pkglist='paru -Qqe > pkglist.txt'
alias zm='rsync -azhP --remove-source-files'
alias bios='systemctl reboot --firmware-setup'

# QUICKLAUNCH
alias yy='yazi'
alias hx='helix'
alias dotfiles='cd $HOME/.dotfiles'
alias resolve='/opt/resolve/bin/resolve'
alias code.dotfiles='code $HOME/.dotfiles'

# PYTHON VIRTUAL ENVIRONMENT
alias envspotdl='. $HOME/.python-env/spotdl-env/bin/activate.fish'

# INIT
envspotdl
zoxide init fish | source
