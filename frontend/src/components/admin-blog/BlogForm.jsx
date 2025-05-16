import React, { useEffect, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';

const BlogForm = ({ onSubmit, loading, selected, onReset }) => {
  const [title, setTitle] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [coverImage, setCoverImage] = useState(null);

  const editor = useEditor({
    extensions: [StarterKit, Underline, Link],
    content: '',
  });

  useEffect(() => {
    if (selected) {
      setTitle(selected.title || '');
      setHashtags(selected.hashtag || '');
      if (editor) editor.commands.setContent(selected.content || '');

      if (selected.imagePath) {
        setCoverImage({ preview: selected.imagePath });
      } else {
        setCoverImage(null);
      }
    }
  }, [selected, editor]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      file.preview = URL.createObjectURL(file);
      setCoverImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !editor?.getHTML().trim()) {
      alert('Title and content are required!');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', editor.getHTML());
    formData.append('hashtags', hashtags.trim());
    formData.append('status', 'draft'); // ✅ always create/update as draft

    if (selected?.id) {
      formData.append('id', selected.id);
    }

    if (coverImage instanceof File) {
      formData.append('image', coverImage);
    }

    onSubmit(formData);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>
        {selected ? '✏️ Edit Blog' : '📝 Create a New Blog'}
      </h2>

      <label style={styles.label}>
        📸 <span style={{ fontWeight: '500' }}>Upload Cover Image</span>
        <input type="file" onChange={handleImageUpload} style={styles.fileInput} />
      </label>

      {coverImage?.preview && (
        <img
          src={coverImage.preview}
          alt="Cover Preview"
          style={{ width: '100%', marginBottom: '20px', borderRadius: '10px' }}
        />
      )}

      <input
        type="text"
        placeholder="Enter blog title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />

      <div style={styles.editorBox}>
        <Toolbar editor={editor} />
        <EditorContent editor={editor} />
      </div>

      <input
        type="text"
        placeholder="#finance #growth"
        value={hashtags}
        onChange={(e) => setHashtags(e.target.value)}
        style={styles.input}
      />

      <button
        type="submit"
        onClick={handleSubmit}
        style={styles.button}
        disabled={loading}
      >
        {loading ? 'Saving...' : selected ? '💾 Update Draft' : '🚀 Save as Draft'}
      </button>
    </div>
  );
};

const Toolbar = ({ editor }) => {
  if (!editor) return null;

  const buttonStyle = (isActive) => ({
    padding: '6px 10px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: isActive ? '#fcb900' : '#f9f9f9',
    cursor: 'pointer',
  });

  return (
    <div style={styles.toolbar}>
      <button style={buttonStyle(editor.isActive('bold'))} onClick={() => editor.chain().focus().toggleBold().run()}>
        <b>B</b>
      </button>
      <button style={buttonStyle(editor.isActive('italic'))} onClick={() => editor.chain().focus().toggleItalic().run()}>
        <i>I</i>
      </button>
      <button style={buttonStyle(editor.isActive('underline'))} onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <u>U</u>
      </button>
      <button style={buttonStyle(editor.isActive('bulletList'))} onClick={() => editor.chain().focus().toggleBulletList().run()}>
        • List
      </button>
      <button style={buttonStyle(editor.isActive('orderedList'))} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        1. List
      </button>
      <button style={buttonStyle(false)} onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>
        Clear
      </button>
    </div>
  );
};

const styles = {
  card: {
    background: '#fff',
    borderRadius: '12px',
    padding: '30px',
    width: '100%',
    maxWidth: '800px',
    margin: 'auto',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: '700',
    textAlign: 'center',
    color: '#1f2a44',
  },
  label: {
    display: 'block',
    marginBottom: '15px',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    marginBottom: '20px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
  },
  button: {
    backgroundColor: '#fcb900',
    color: '#000',
    fontWeight: '600',
    border: 'none',
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    borderRadius: '30px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  fileInput: {
    display: 'block',
    marginTop: '8px',
  },
  editorBox: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '20px',
    padding: '12px',
    minHeight: '180px',
    backgroundColor: '#fff',
  },
  toolbar: {
    marginBottom: '8px',
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
};

export default BlogForm;
