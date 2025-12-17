---
description: "Task list for creating the Physical AI Book structure in Docusaurus."
---

# Tasks: Create Physical Book Spec

**Input**: Design documents from `/specs/001-create-physical-book-spec/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions.

## Path Conventions

- All paths are relative to the repository root.

## Phase 1: Setup (Docusaurus Configuration)

**Purpose**: Configure the Docusaurus site for the book.

- [ ] T001 Update `docusaurus.config.js` with the book's title ('Physical AI Book'), tagline, and URL.
- [ ] T002 Customize the navbar in `docusaurus.config.js` to link to the docs section.
- [ ] T003 Customize the footer in `docusaurus.config.js`.
- [ ] T004 [P] Update the homepage hero section in `src/pages/index.js` to reflect the book's content.
- [ ] T005 [P] Clean up unused example components and pages from the default Docusaurus installation.

---

## Phase 2: Foundational (Sidebar Configuration)

**Purpose**: Establish the manual navigation structure required for a logical, beginner-to-advanced flow.

**⚠️ CRITICAL**: No chapter/lesson work can be properly navigated until this is complete.

- [ ] T006 Create `sidebars.js` file to manually control the sidebar structure.
- [ ] T007 Define the basic sidebar structure in `sidebars.js` to export a `tutorialSidebar` that will contain the book chapters.
- [ ] T008 Link `sidebars.js` to the Docusaurus configuration in `docusaurus.config.js` under `themeConfig.docs.sidebar`.

**Checkpoint**: Foundation ready. The site will build with an empty but configurable sidebar.

---

## Phase 3: User Story 1 - Author Defines Book Structure (Priority: P1) 🎯 MVP

**Goal**: Create the foundational file and folder structure for the book's single chapter and three lessons.

**Independent Test**: The Docusaurus site builds successfully and the sidebar displays one chapter titled "Chapter 1" which, when clicked, reveals three navigable links: "Lesson 1", "Lesson 2", and "Lesson 3".

### Implementation for User Story 1

- [ ] T009 [US1] Create a new directory `docs/chapter1`.
- [ ] T010 [US1] Create `docs/chapter1/_category_.json` with a title "Chapter 1" and a position label to order it.
- [ ] T011 [P] [US1] Create the file `docs/chapter1/lesson1.md` with a title "Lesson 1".
- [ ] T012 [P] [US1] Create the file `docs/chapter1/lesson2.md` with a title "Lesson 2".
- [ ] T013 [P] [US1] Create the file `docs/chapter1/lesson3.md` with a title "Lesson 3".
- [ ] T014 [US1] Update `sidebars.js` to include the `chapter1` directory and its contents, ensuring the lessons are ordered correctly.

**Checkpoint**: At this point, User Story 1 should be fully functional. The book's structure is visible and navigable on the Docusaurus site.

---

## Phase 4: User Story 2 - Author Writes a Lesson Following Guidelines (Priority: P2)

**Goal**: Populate the created lesson files with placeholder content that follows the standardized lesson format.

**Independent Test**: Each lesson page (`lesson1.md`, `lesson2.md`, `lesson3.md`) renders with the three required sections: "Explanation", "Example", and "Practice".

### Implementation for User Story 2

- [ ] T015 [P] [US2] Populate `docs/chapter1/lesson1.md` with markdown headers for "Explanation", "Example", and "Practice".
- [ ] T016 [P] [US2] Populate `docs/chapter1/lesson2.md` with markdown headers for "Explanation", "Example", and "Practice".
- [ ] T017 [P] [US2] Populate `docs/chapter1/lesson3.md` with markdown headers for "Explanation", "Example", and "Practice".

**Checkpoint**: At this point, User Story 2 is structurally complete. Authors have a clear template to follow within each lesson file.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and cleanup.

- [ ] T018 Run `npm run build` to ensure a successful production build with no errors.
- [ ] T019 Review the generated site to confirm all sidebar links work and pages render correctly.
- [ ] T020 Validate that the `quickstart.md` testing scenarios are met.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion.
- **User Stories (Phase 3 & 4)**: Depend on Foundational phase completion.
- **Polish (Phase 5)**: Depends on all user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Depends on Foundational (Phase 2).
- **User Story 2 (P2)**: Depends on User Story 1 (Phase 3).

### Parallel Opportunities

- Within Phase 1, T004 and T005 can be done in parallel.
- Within User Story 1, tasks T011, T012, and T013 can be done in parallel after T009 and T010 are complete.
- Within User Story 2, tasks T015, T016, and T017 can be done in parallel.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test that the sidebar navigation for Chapter 1 and its lessons works as expected.

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready.
2. Add User Story 1 → Test independently → Chapter structure is visible.
3. Add User Story 2 → Test independently → Lesson templates are ready for authors.
4. Complete Polish phase for final validation.