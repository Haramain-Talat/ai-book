# Data Model: Book Content

**Source Spec**: [spec.md](./spec.md)

This document defines the logical entities for the book's content structure. As this is a content-based project using Markdown files, this model describes the metadata and file structure rather than a traditional database schema.

## Entity: Chapter

Represents a major section of the book.

| Field | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| `title` | String | The public-facing title of the chapter. | Yes |
| `position` | Integer | The display order of the chapter in the sidebar. | Yes |
| `description` | String | A short summary of the chapter's content. | Yes |
| `lessons` | Array<Lesson> | An ordered collection of lessons within the chapter. | Yes |

**Implementation**: A chapter is implemented as a directory within the `docs/` folder (e.g., `docs/chapter1/`). The `title`, `position`, and `description` are defined in a `_category_.json` file within that directory.

## Entity: Lesson

Represents a single learning module within a chapter.

| Field | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| `title` | String | The public-facing title of the lesson. | Yes |
| `sidebar_label` | String | An optional, shorter label for the sidebar. | No |
| `description` | String | A short summary of the lesson's content. | Yes |
| `body` | Markdown | The main content of the lesson. | Yes |

**Implementation**: A lesson is implemented as a Markdown file (e.g., `lesson1.md`). The metadata (`title`, `sidebar_label`, `description`) is defined in the Markdown file's frontmatter. The `body` is the content of the file and must adhere to the structure: Explanation, Example, Practice.

## Relationships

- A `Chapter` contains one or more `Lessons`.
- A `Lesson` belongs to exactly one `Chapter`.
