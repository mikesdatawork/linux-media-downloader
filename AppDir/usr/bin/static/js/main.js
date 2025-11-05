// s010_main.js
// Main JavaScript for YT Media Backup

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Enable Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Define PyWebView API bridge for folder selection
    // This will be used by the index.html page
    if (window.pywebview && !window.pywebview.api) {
        window.pywebview.api = {
            openFileDialog: function(isFolder) {
                return new Promise(function(resolve, reject) {
                    // Create a file input element
                    var input = document.createElement('input');
                    input.type = 'file';
                    
                    if (isFolder) {
                        input.webkitdirectory = true;
                        input.directory = true;
                    }
                    
                    input.onchange = function(e) {
                        if (input.files.length > 0) {
                            if (isFolder) {
                                // For folders, we want the path to the directory
                                var path = input.files[0].webkitRelativePath.split('/')[0];
                                // Navigate to this folder relative to the current directory
                                // In a real implementation, we'd use the actual path
                                // but for this demo, we'll just use the selected folder name
                                resolve(path);
                            } else {
                                resolve(input.files[0].name);
                            }
                        } else {
                            resolve(null);
                        }
                    };
                    
                    // Trigger the file dialog
                    input.click();
                });
            }
        };
    }
});
