'use strict'

import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('extension.textHighlight', function () {
    // Get the active text editor
    const editor = vscode.window.activeTextEditor

    if (editor) {

      const firstLine = editor.document.lineAt(0)
      const lastLine = editor.document.lineAt(editor.document.lineCount - 1)
      const textRange = new vscode.Range(firstLine.range.start, lastLine.range.end)
      return !textRange.isEmpty
    }
  })

  context.subscriptions.push(disposable)
}