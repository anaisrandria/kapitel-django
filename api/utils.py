from enum import IntEnum

class StatusLabel(IntEnum):
    READING = 1
    QUEUED = 2
    COMPLETED = 3
    PAUSED = 4
    ARCHIVED = 5

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]