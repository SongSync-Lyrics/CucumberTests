Feature: As a leader, I would like to upload ChordPro files, so that I can share the lyrics

  Scenario: I upload ChordPro files
    Given Im a leader
    And I have working ChordPro files
    When I upload ChordPro files
    Then ensure the website displays "lyrics"
    And the lyrics are properly formatted
    And the lyrics are shared

Scenario: I fail to upload ChordPro files
    Given Im a leader
    And I have broken ChordPro files
    When I upload ChordPro files
    Then ensure the website displays "an error"