" Vim filetype plugin
" Language:             Presentation
" Maintainer:           smeghead <smeghead7@gmail.com>
" Last Change:          2011-11-11

if exists("b:did_ftplugin")
  finish
endif
 
runtime! ftplugin/html.vim ftplugin/html_*.vim ftplugin/html/*.vim
unlet! b:did_ftplugin

setlocal comments=fb:*,fb:-,fb:+,n:> commentstring=>\ %s
setlocal formatoptions+=tcqln
setlocal formatlistpat=^\\s*\\d\\+\\.\\s\\+\\\|^[-*+]\\s\\+
 
let b:undo_ftplugin .= "|setl cms< com< fo<"
 
" auto update
autocmd BufWritePost <buffer> silent exec "!presen"

"open browser
noremap <buffer> <F5> :!gnome-open %:p:h/index.html > /dev/null 2>&1<CR>
