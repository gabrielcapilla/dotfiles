# ::::: LOAD CACHYOS-CONFIG ::::: #
source /usr/share/cachyos-fish-config/cachyos-config.fish

# ::::: LOAD LOCAL CONFIG ::::: #
source $HOME/.config/fish/init.fish
source $HOME/.config/fish/hue.fish
source $HOME/.config/fish/hook.fish
source $HOME/.config/fish/themes.fish

# ::::: NIM & NIMBLE ::::: #
set -ga fish_user_paths $HOME/.nimble/bin

# ::::: PYTHON ::::: #
set -gx PATH $HOME/.local/bin $PATH

# ::::: PYTHON: PIPER ::::: #
set -x PYTHONPATH /usr/lib/python3.13/site-packages $PYTHONPATH

# ::::: UV & UVX ::::: #
uv generate-shell-completion fish | source
uvx --generate-shell-completion fish | source

# ::::: RUBY ::::: #
# set -U fish_user_paths $HOME/.local/share/gem/ruby/3.3.0/bin $fish_user_paths
# set -gx GEM_HOME "$HOME/.local/share/.gem/ruby/3.3.0"
# set -gx GEM_PATH "$GEM_HOME"
# set -gx PATH "$GEM_HOME/bin" $PATH

# ::::: DEFAULT TERMINAL TEXT EDITOR ::::: #
export EDITOR='helix'
export VISUAL='helix'

# ::::: SYSTEM ACTIONS ::::: #
alias :q=':Q'
alias :c=':C'
alias :q!=':Q!'
alias :Q='exit'
alias :C='clear'
alias :Q!='exit'
alias b='cd ..'
alias back='b'
alias edit='helix'
alias apagar='shutdown now'
alias reiniciar='shutdown -r now'
alias bios='systemctl reboot --firmware-setup'

# ::::: ALIASES ::::: #
alias grayjay "nohup bash -c 'cd /home/human/Descargas/grayjay/ && ./Grayjay %U > /dev/null 2>&1 &'"
alias resolve='LD_PRELOAD="/usr/lib64/libglib-2.0.so.0 /usr/lib64/libgio-2.0.so.0 /usr/lib64/libgmodule-2.0.so.0" /opt/resolve/bin/resolve'
alias dotfiles='cd $HOME/.dotfiles/Configs'

# Added by Radicle.
export PATH="$PATH:/home/human/.radicle/bin"
